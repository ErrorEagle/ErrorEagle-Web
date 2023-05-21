<script src="pdfmake.min.js"></script>

function gerarPdf(){
    var docDefinition = {
        content: [
          'Olá, mundo!' // Conteúdo do documento, pode ser qualquer coisa suportada pela biblioteca
        ]
      };
      
      // Crie o documento PDF
      var pdfDoc = pdfMake.createPdf(docDefinition);

      pdfDoc.download('arquivo.pdf');

      pdfDoc.open();
}