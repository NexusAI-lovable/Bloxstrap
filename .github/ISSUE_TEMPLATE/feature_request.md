name: Feature Request
description: Suggest an idea for Bloxstrap
title: "[FEATURE] "
labels: ["enhancement"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Thanks for suggesting a feature! Please fill out the form below.

  - type: textarea
    id: problem
    attributes:
      label: Problem Statement
      description: Is your feature request related to a problem? Describe it.
      placeholder: "I'm always frustrated when..."
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Proposed Solution
      description: Describe the solution you'd like
      placeholder: "I'd like Bloxstrap to..."
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives Considered
      description: Describe alternative solutions you've considered
      placeholder: "Other approaches I considered..."

  - type: textarea
    id: use_case
    attributes:
      label: Use Case
      description: Describe your use case in detail
      placeholder: "This would help me..."
    validations:
      required: true

  - type: textarea
    id: example
    attributes:
      label: Example Code
      description: Provide example code if applicable
      render: lua

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Add any other context or screenshots
      placeholder: "Any other details..."

  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      options:
        - label: I've searched for similar feature requests
          required: true
        - label: This feature would benefit other users
          required: true
