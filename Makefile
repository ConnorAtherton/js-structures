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

default: test

test: | node_modules
	@$(MOCHA) --recursive

lint: | node_modules
	@$(ESLINT) src/

clean-deps:
	@rm -rf node_modules

install-deps:
	@npm install

.PHONY: test
.PHONY: lint
