/* Jmol */
Jmol._isAsync = false;
Jmol.setDocument(0);
const Info = {
  width: "100%",
  height: "100%",
  use: "HTML5",
  j2sPath: "https://chemapps.stolaf.edu/jmol/jsmol/j2s/",
  script: "set antialiasDisplay; set zoomHeight true;",
  serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
  disableJ2SLoadMonitor: true,
  disableInitialConsole: true
};

Jmol.getApplet("jmolview1", Info);
Jmol.script(jmolview1, "load http://rruff.geo.arizona.edu/AMS/CIF_text_files/13235_cif.txt");
$("#silicon").html(Jmol.getAppletHtml(jmolview1));

new Vue({
  el: "#app",
  data: {
    selected: null,
    materials: []
  },
  created() {
    console.log("Hello World!");
    fetch("materials.json").then(response => response.json()).then(json => {
      this.materials = json.material
    });
  },
  method: {
    getStructure: function(tempurl) {
      Jmol.getApplet("jmolview1", Info);
      Jmol.script(jmolview1, "load " + tempurl);
      $("#jmol").html(Jmol.getAppletHtml(jmolview1));
    }
  },
  watch: {
    selected: function() {
      Jmol.getApplet("jmolview1", Info);
      console.log("load " + this.selected.geometryURL);
      Jmol.script(jmolview1, "load " + this.selected.geometryURL);
      /*
      Jmol.script(jmolview1, "load http://files.rcsb.org/ligands/view/HOH_model.sdf")*/
      $("#jmol").html(Jmol.getAppletHtml(jmolview1));
    }
  }
})
