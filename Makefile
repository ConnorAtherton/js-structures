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
GULP := $(BIN)/gulp

default: build

test: | node_modules
	@$(MOCHA)

lint: | node_modules
	@$(ESLINT) src/

clean-deps:
	@rm -rf node_modules

install-deps:
	@npm install

clean:
	@rm -rf dist

build: | node_modules
	@$(GULP)

.PHONY: test
