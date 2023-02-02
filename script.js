  delEl[i].onclick = function () {
            this.parentElement.style.display
            
          }



            var delEl = document.querySelectorAll('#del')
      for(var i=0; i<delEl.length;i++){
        delEl[i].onclick = function () {
          this.parentNode.remove()
      }}