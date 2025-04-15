async function buscarVagas(termo) {
    try {
      const response = await fetch(`back-end/search.php?q=${encodeURIComponent(termo)}`);
      const data = await response.json();
  
      if (!response.ok) throw new Error(data.error || 'Erro ao buscar vagas');
      
      return data.vagas;
    } catch (error) {
      alert('Erro na busca: ' + error.message);
      return [];
    }
  }
  
