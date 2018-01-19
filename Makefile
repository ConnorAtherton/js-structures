#
# Environment.
#
export NODE_ENV = test

NODE ?= node

#
# Binaries.
#

BIN = ./node_modules/.bin

MOCHA := $(BIN)/_mocha
ESLINT := $(BIN)/eslint
TODO := $(BIN)/todos
ISTANBUL := $(BIN)/istanbul
NODE := $(BIN)/babel-node
BROWSERIFY := $(BIN)/browserify

default: build

test: | node_modules build
	@$(NODE) $(MOCHA) --opts .mocha

browser-test: | node_modules
	@$(BROWSERIFY) test/**/*.js -o test/browser.js

coverage:
	@$(NODE) ./node_modules/.bin/istanbul cover $(MOCHA) -- --opts .mocha

coveralls: coverage
	@cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage

lint: | node_modules
	@$(ESLINT) src/

clean-deps:
	@rm -rf node_modules

install-deps:
	@npm install

clean:
	@rm -rf dist

todos:
	@$(TODO) --ignore='dist,test,README.md'

watch: clean | node_modules
	@npm run watch

build: clean | node_modules
	@npm run build

test--full: build test coverage

.PHONY: test coverage
