exports.getMessage = () => {
  const message = {
    "encryptedMessage": "foo123",
    "question": "Are you a good guy?",
    "answers": [
      {
        "text": "yes",
        "key": "bar1"
      },
      {
        "text": "no",
        "key": "bar2"
      },
      {
        "text": "maybe",
        "key": "bar3"
      }
    ]
  }
  return message;
}
