function process() {
  const sentence = document.getElementById('sentence').value;
  const password = document.getElementById('password').value;
  const option = document.getElementById('options').value;
  let result = '';

  if (option === 'encrypt') {
    result = encrypt(sentence, password);
  } else if (option === 'decrypt') {
    result = decrypt(sentence, password);
  } else {
    result = 'Invalid option';
  }

  document.getElementById('result').value = result;
}

function encrypt(sentence, password) {
  let encryptedText = '';
  password = password.repeat(Math.ceil(sentence.length / password.length));

  for (let i = 0; i < sentence.length; i++) {
    const c = password.charCodeAt(i);
    const d = sentence.charCodeAt(i);
    const e = String.fromCharCode((c + d) % 1114112); // Unicode range for full support
    encryptedText += e;
  }

  return encryptedText;
}

function decrypt(sentence, password) {
  let decryptedText = '';
  password = password.repeat(Math.ceil(sentence.length / password.length));

  for (let i = 0; i < sentence.length; i++) {
    const c = password.charCodeAt(i);
    const d = sentence.charCodeAt(i);
    const e = String.fromCharCode((d - c + 1114112) % 1114112);
    decryptedText += e;
  }

  return decryptedText;
}

