#!/bin/bash

echo "tests ran in container"
rm -rf allure-results && pwd && ls -al
npm install
npm run test
test_exit_code=$?

rm -rf allure-report && pwd && ls -al
allure generate allure-results -c -o allure-report
pwd && ls -al
last_exit_code=$?

if [ $test_exit_code -ne 0 ] || [ $last_exit_code -ne 0 ]; then
    echo "Test Failed"
    exit 1
else
    echo "Test Completed"
fi