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
      },
      /*{
        name: "Graphene",
        displayName: "graphene",
        description: "Graphene is a semimetal with small overlap between the valence and the conduction bands. It is an allotrope of carbon consisting of a single layer of carbon atoms arranged in a hexagonal lattice.",
        geometryURL: "geometry/graphite.in",
        source: "https://en.wikipedia.org/wiki/graphene",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/53/Graphene_SPM.jpg",
        bandStructure: "band/Graphene.jpg",
        reasons: ""
      },*/
      {
        name: "Al",
        displayName: "Aluminum",
        description: "Aluminium or aluminum is a chemical element with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic and ductile metal in the boron group.",
        geometryURL: "geometry/Al-fcc.in",
        source: "https://en.wikipedia.org/wiki/Aluminium",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Aluminium-4.jpg",
        bandStructure: "band/Al-fcc.jpg",
        reasons: "No. It is a metal and there is no gap as the band structure shows. "
      },
      {
        name: "Si",
        displayName: "silicon",
        description: "Silicon is a chemical element with symbol Si and atomic number 14. It is a  hard and brittle crystalline solid with a blue-grey metallic lustre; and it is a tetravalent metalloid and semiconductor. It is a member of group 14 in the periodic table: carbon is above it; and germanium, tin, and lead are below it. It is relatively unreactive.",
        source: "https://en.wikipedia.org/wiki/Silicon",
        geometryURL: "geometry/Si_DIA.in",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e9/SiliconCroda.jpg",
        bandStructure: "band/Si_DIA.jpg",
        reasons: "Yes. "
      },
      {
        name: "SiO2",
        displayName: "silicon dioxide",
        description: "Silicon dioxide, also known as silica, silicic acid or silicic acid anydride is an oxide of silicon with the chemical formula SiO₂, most commonly found in nature as quartz and in various living organisms. In many parts of the world, silica is the major constituent of sand.",
        source: "https://en.wikipedia.org/wiki/Silicon_dioxide",
        geometryURL: "geometry/SiO2.in",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sample_of_silicon_dioxide.jpg",
        bandStructure: "band/SiO2.jpg",
        reasons: "No. The gap is large!"
      },
      {
        name: "GaAs",
        displayName: "gallium arsenide",
        description: "Gallium arsenide is a compound of the elements gallium and arsenic. It is a III-V direct bandgap semiconductor with a Zinc blende crystal structure.",
        source: "https://en.wikipedia.org/wiki/Gallium_arsenide",
        geometryURL: "geometry/GaAs.in",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/22/Gallium_Arsenide_%28GaAs%29_2%22_wafer.jpg",
        bandStructure: "band/GaAs.jpg",
        reasons: "Yes."
      },
      {
        name: "CBTS",
        displayName: "CBTS",
        description: "Copper-Barium-Tin-Sulfide Cu<sub>2</sub>BaSnS<sub>4</sub> is a quaternary semiconductor studied by our group in collaboration with the group of David Mitzi. It has an experimentally measured band gap between 1.9 eV and 2.0 eV, which is somewhat high for photovoltaics. However, one can produce working proof-of-concept solar cells from this material, one can alloy it with Se to obtain a lower band gap and achieve higher efficiency, and one can also use it for photoelectrochemical generation of hydrogen as a solar fuel.",
        geometryURL: "geometry/CBTS.in",
        imageURL: null,
        bandStructure: "band/CBTS.jpg",
        reasons: "Yes."
      },
      {
        name: "CBTSe",
        displayName: "CBTSe",
        description: "Copper-Barium-Tin-Selenide, Cu<sub>2</sub>BaSnSe<sub>4</sub>, is a quaternary semiconductor studied by our group in collaboration with the group of David Mitzi. It has an experimentally measured band gap between 1.6 eV and 1.7 eV, still somewhat high for photovoltaics but lower than that of pure CBTS. The crystal structure, however, is different from that of CBTS, and in this case, the structure change increases the band gap. An alloyed ratio of 25% S : 75% Se changes the structure back to that of CBTS and produces the lowest band gap ovserved in this system, about 1.5 eV.",
        geometryURL: "geometry/CBTSe.in",
        imageURL: null,
        bandStructure: "band/CBTSe.jpg",
        reasons: "Yes."
      },
      {
        name: "CZTS",
        displayName: "CZTS",
        description: "Copper-Zinc-Tin-Sulfide, Cu<sub>2</sub>ZnSnS<sub>4</sub>, is a thin-film photovoltaic material that saw much development effort since the chemical elements used to make it are rather abundant in the earth's crust, and they are non-toxic. The record PV device efficiency for this material in the lab is only at about 13%, however, since the material is prone to show structural disorder between Cu and Zn atoms. This reduces the attainable output voltage from any CZTS based device to date and led to the development of CBT(S,Se) and related materials as a potential alternative without this disadvantage.",
        geometryURL: "geometry/CZTS.in",
        imageURL: null,
        bandStructure: "band/CZTS.jpg",
        reasons: "Yes."
      },
      {
        name: "perovskite",
        displayName: "2D hybrid perovskite",
        description: "AE4TPbI4",
        geometryURL: "geometry/AE4TPbI4.in",
        imageURL: null,
        bandStructure: "band/AE4TPbI4.jpg",
        reasons: "Yes."
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
