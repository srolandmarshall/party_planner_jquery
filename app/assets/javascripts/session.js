var token = document.querySelector('meta[name="csrf-token"]').content
request.setRequestHeader('X-CSRF-Token', token)
