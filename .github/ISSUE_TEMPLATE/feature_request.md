name: Feature Request
description: Suggest a feature
title: "[FEATURE] "
labels: ["enhancement"]

body:
  - type: textarea
    id: description
    attributes:
      label: Description
      description: What would you like to see?
    validations:
      required: true

  - type: textarea
    id: use_case
    attributes:
      label: Use Case
      description: Why would this be useful?
