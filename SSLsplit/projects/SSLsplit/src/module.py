#!/usr/bin/env python3

import logging

from pineapple.modules import Module, Request


module = Module("SSLsplit", logging.DEBUG)
@module.handles_action("hello_world")
def check_dependencies(request: Request):
	return "You said: {}".format(request.user_input)

if __name__ == "__main__":
	module.start()
