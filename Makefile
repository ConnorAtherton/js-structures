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

default: build

test: | node_modules
	@$(NODE) $(MOCHA) --opts .mocha

coverage:
	@$(NODE) ./node_modules/istanbul/lib/cli cover --report text $(MOCHA) --  --opts .mocha

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
