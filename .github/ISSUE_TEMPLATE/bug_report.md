name: Bug Report
description: Report a bug to help us improve Bloxstrap
title: "[BUG] "
labels: ["bug"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!

  - type: dropdown
    id: version
    attributes:
      label: Bloxstrap Version
      description: Which version of Bloxstrap are you using?
      options:
        - "1.0.0"
        - "0.9.0"
        - "Other (please specify)"
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Description
      description: A clear and concise description of what the bug is.
      placeholder: "Describe the issue..."
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior
      placeholder: |
        1. Initialize Bloxstrap with...
        2. Call function...
        3. See error...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What you expected to happen
      placeholder: "It should..."
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual Behavior
      description: What actually happened
      placeholder: "Instead, it..."
    validations:
      required: true

  - type: textarea
    id: error
    attributes:
      label: Error Message/Stack Trace
      description: If applicable, paste any error messages or stack traces
      render: lua

  - type: textarea
    id: environment
    attributes:
      label: Environment
      description: |
        - Node.js version:
        - npm version:
        - OS:
        - Roblox Studio version:
      render: markdown

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Add any other context about the problem here
      placeholder: "Anything else we should know?"

  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      description: Please confirm you've done the following
      options:
        - label: I've searched the existing issues
          required: true
        - label: This is not a duplicate
          required: true
        - label: I'm using the latest version
          required: true
