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
	@$(MOCHA)

lint: | node_modules
	@$(ESLINT) app/

clean-deps:
	@rm -rf node_modules vendor

install-deps:
	@npm install

.PHONY: test
.PHONY: lint
