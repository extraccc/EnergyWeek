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
    materials: [{
        name: "C",
        displayName: "diamond",
        description: "Diamond is a solid form of carbon with a diamond cubic crystal structure. At room temperature and pressure it is metastable and graphite is the stable form, but diamond almost never converts to graphite. ",
        source: "https://en.wikipedia.org/wiki/Diamond",
        geometryURL: "geometry/diamond.cif",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rough_diamond.jpg",
        bandStructure: "band/C_DIA.jpg",
        reasons: "Absolutely not! The gap is large, what's more, it is expensive."
      }, {
        name: "Graphene",
        displayName: "graphene",
        description: "Graphene is a semimetal with small overlap between the valence and the conduction bands. It is an allotrope of carbon consisting of a single layer of carbon atoms arranged in a hexagonal lattice.",
        geometryURL: "geometry/graphite.in",
        source: "https://en.wikipedia.org/wiki/graphene",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/53/Graphene_SPM.jpg",
        bandStructure: "band/Graphene.jpg",
        reasons: ""
      },
      {
        name: "Al",
        displayName: "Aluminum",
        description: "Aluminium or aluminum is a chemical element with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic and ductile metal in the boron group.",
        geometryURL: "geometry/Al-fcc.in",
        source: "https://en.wikipedia.org/wiki/Aluminium",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Aluminium-4.jpg",
        bandStructure: "band/Al-fcc.jpg",
        reasons: ""
      },
      {
        name: "Si",
        displayName: "silicon",
        description: "Silicon is a chemical element with symbol Si and atomic number 14. It is a  hard and brittle crystalline solid with a blue-grey metallic lustre; and it is a tetravalent metalloid and semiconductor. It is a member of group 14 in the periodic table: carbon is above it; and germanium, tin, and lead are below it. It is relatively unreactive.",
        source: "https://en.wikipedia.org/wiki/Silicon",
        geometryURL: "geometry/Si_DIA.in",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e9/SiliconCroda.jpg",
        bandStructure: "band/Si_DIA.jpg",
        reasons: "Perhaps yes."
      },
      {
        name: "SiO2",
        displayName: "silicon dioxide",
        description: "Silicon dioxide, also known as silica, silicic acid or silicic acid anydride is an oxide of silicon with the chemical formula SiO₂, most commonly found in nature as quartz and in various living organisms. In many parts of the world, silica is the major constituent of sand.",
        source: "https://en.wikipedia.org/wiki/Silicon_dioxide",
        geometryURL: "geometry/SiO2.in",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sample_of_silicon_dioxide.jpg",
        bandStructure: "band/SiO2.jpg",
        reasons: "#"
      },
      {
        name: "GaAs",
        displayName: "gallium arsenide",
        description: "Gallium arsenide is a compound of the elements gallium and arsenic. It is a III-V direct bandgap semiconductor with a Zinc blende crystal structure.",
        source: "https://en.wikipedia.org/wiki/Gallium_arsenide",
        geometryURL: "geometry/GaAs.in",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/22/Gallium_Arsenide_%28GaAs%29_2%22_wafer.jpg",
        bandStructure: "band/GaAs.jpg",
        reasons: "Perhaps..."
      },
      {
        name: "CBTS",
        displayName: "CBTS",
        description: "CBTS",
        geometryURL: "geometry/CBTS.in",
        imageURL: "#",
        bandStructure: "band/CBTS.jpg",
        reasons: "undefined"
      },
      {
        name: "CBTSe",
        displayName: "CBTSe",
        description: "will be widely used in the futrue(I guess)",
        geometryURL: "geometry/CBTSe.in",
        imageURL: "#",
        bandStructure: "band/CBTSe.jpg",
        reasons: "Perhaps.."
      },
      {
        name: "CZTS",
        displayName: "CZTS",
        description: "CZTS",
        geometryURL: "geometry/CZTS.in",
        imageURL: "#",
        bandStructure: "band/CZTS.jpg",
        reasons: "undefined"
      },
      {
        name: "perovskite",
        displayName: "2D hybrid perovskite",
        description: "AE4TPbI4",
        geometryURL: "geometry/AE4TPbI4.in",
        imageURL: "#",
        bandStructure: "band/AE4TPbI4.jpg",
        reasons: "Perhaps yes..."
      }
    ]
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
