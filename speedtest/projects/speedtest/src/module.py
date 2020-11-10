#!/usr/bin/env python3

import logging
import time
import subprocess

from pineapple.modules import Module, Request

module = Module('speedtest',logging.DEBUG)

global process
process = 0

def _check_speedtest_running():
    if process == None:
        return 1
    else:
        return 0

@module.handles_action('run_test')
def run_test(request: Request):
    sleep(2)
    return "nice"
    downloadCMD = "wget -O /dev/null http://cachefly.cachefly.net/50mb.test"
    downloadCMD = downloadCMD.split(" ")
    startTime = time.time()
    subprocess.Popen(downloadCMD, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).wait()
    duration = time.time() - startTime
    duration = round(duration,4)
    rate = 50 / duration
    return f"50MB downloaded @ {round(rate, 2)}MB/s"

if __name__ == '__main__':
    module.start()
