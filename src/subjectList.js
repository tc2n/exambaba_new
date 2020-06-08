const subjectList = {
  cse: [ "computer organisation and architecture", "computer networks and commutication", "programming with c", "compiler design", "calculus and linear algebra", "engineering drawing / graphics", "data structures", "discrete mathmatics", "fundamental of physics", "java programming", "microprocessor and interfacing", "object oriented programming", "operating system", "theory of computation", "discourse of human virtues", "digital electronics", "computer network security", "internet of things", "introduction to logic", "artificial intelligence", "block chain coding", "marketing amnagement", "professional ethics", "soft computing", "software engineering", "mobile communications", "cloud computing", "high performance computing", "design and analsis of algorithms", "database management systems"],

  me: ["programming in c", "calculus and linear algebra", "engineering mechanics", "engineering drawing / graphics", "engineering / modern physics", "material science and engineering", "vector calculus and differential engineering", "thermodynamics", "manufacturing processes", "kinematics of machines", "strength of materials", "fluid mechanics", "integral transforms and complex analysis", "machine design", "thermal engineering", "fluid machines", "engineering mathematics II", "programming with python", "discourse of human virtues", "professional communication", "introduction to logic", "engineering mathematics I"],

  ece: ["calculus and linear algebra", "engineering drawing / graphics", "basic electrical engineering", "modern physics", "network analysis and synthesis", "vector calculus and differential equations", "electronics circuits and simulation", "programming in c", "integral transforms and complex analysis", "analog communication engineering", "industrial electronics", "electromagnetic field theory", "digital electronics", "antenna and wave propgation", "digital communication", "embedded systems and microcontrollers", "signal processing and linear systems", "constrol systems", "linear integrated circuits and applications", "digital system design using vhdl"]
};

const shortNames = {
  cse: ["coa", "cnc", "c", "cd", "cla", "eg", "ds", "dsm", "fop", "jp", "mi", "oops", "os", "toc", "dhv", "de", "cns", "iot", "itl", "ai", "bcc", "mkm", "pe", "sc", "se", "mc", "cc", "hpc", "daa", "dbms"],
  me: ["pc", "clam", "em", "ed", "mp", "mse", "vcde", "td", "mpr", "km", "som", "fm", "itca", "md", "te", "fmac", "emii", "pp_mech", "dhv_mech", "prof_comm", "itl_mech", "emi"],
  ece: ["cla", "eg", "bee","mp","nas", "vcdee", "ecs", "pce", "itca", "ace", "ieng", "eft", "del","awp","digc", "esm", "spls", "csys", "lica", "dsdvhdl"]
};

function shorten(branch, fullName) {
  const index = subjectList[branch].findIndex(x => x === fullName);
  if (index === -1) {
    return -1;
  }
  return shortNames[branch][index];
}

function geturl(subject, year, exam) {
  return `/images/${subject}${year}m${exam}.jpg`;
}

export default subjectList;
export { shorten, geturl };
