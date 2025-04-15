async function buscarFeedbacks() {
    try {
      const response = await fetch('back-end/feedbacks.php');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao carregar feedbacks:', error);
      return [];
    }
  }
  
