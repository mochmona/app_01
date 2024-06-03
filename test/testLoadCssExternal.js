export async function loadCSS(url) {
    return await new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = resolve;
      link.onerror = reject;
      document.body.appendChild(link);
    });
  }

  // not working