async function login(username, password) {
    try {
      const response = await fetch('back-end/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) throw new Error(data.error || 'Erro desconhecido');
  
      sessionStorage.setItem('token', data.token); // armazenando token
  
      alert('Login realizado com sucesso!');
      return data;
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  }
  
