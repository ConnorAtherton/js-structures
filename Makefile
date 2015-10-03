#
# Environment.
#

NODE ?= node

#
# Binaries.
#

BIN = ./node_modules/.bin

MOCHA := $(BIN)/mocha
ESLINT := $(BIN)/eslint
TODO := $(BIN)/todos

default: build

test: | node_modules
	@$(MOCHA) --recursive --compilers js:mocha-traceur

lint: | node_modules
	@$(ESLINT) src/

clean-deps:
	@rm -rf node_modules

install-deps:
	@npm install

clean:
	@rm -rf dist

todos:
	@$(TODO) --ignore='dist'

watch: | node_modules
	@npm run watch

build: | node_modules
	@npm run build

.PHONY: test
