#!/usr/bin/env python3

import logging
import os
# basic required module and request
from pineapple.modules import Module, Request
from pineapple.jobs import JobManager
from pineapple.helpers.opkg_helpers import OpkgJob
import pineapple.helpers.command_helpers as cmd
import pineapple.helpers.opkg_helpers as opkg

module = Module("SSLsplit", logging.DEBUG)
manager = JobManager("SSLsplit", log_level=logging.DEBUG, module=module)

_DEPENDENCIES = ["openssl", "iptables", "nginx"]
@module.handles_action("hello_world")
def check_dependencies(request: Request):
	return f"You said: {request.user_input}"

if __name__ == "__main__":
	module.start()
