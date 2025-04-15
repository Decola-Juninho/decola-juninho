async function register(user) {
    try {
      const response = await fetch('back-end/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (!response.ok) throw new Error(data.errors?.join('\n') || 'Erro ao registrar');
  
      sessionStorage.setItem('token', data.token);
      alert('Cadastro realizado com sucesso!');
      return data;
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  }
  
