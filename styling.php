<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Styling Me Please</title>
  <!-- Ini bukan soal, hanya saja sangat menyenangkan membuatnya -->
</head>
<body>
  <div class="a">Nedya Amrih Prakasa</div>
  <div class="a">Sormin</div>
  
</body>
</html>

<script type="text/javascript">
  function jq(clName){
    var obj = {
      class: document.getElementsByClassName(clName),
      attr:"",
      red: function() {
        this.attr = this.attr + "color:red;";
        return this;
      },
      bold: function() {
        this.attr = this.attr + "font-weight:bold;";
        return this;
      },
      execute: function() {
        for(i=0;i<this.class.length;i++){
          this.class[i].setAttribute("style", this.attr);
        }
      }
    };
    return obj;
  }

  jq("a").red().bold().execute();
</script>

<script type="text/javascript">
  function increment(numb){
    var inc = {
      return: numb,
      one: function(){
        this.return = this.return + 1;
        return this;
      },
      two: function(){
        this.return = this.return + 2;
        return this;
      }
    };
    return inc;
  }
  console.log(increment(5).one().two());
</script>
