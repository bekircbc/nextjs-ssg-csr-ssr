// "$rank=4.1;$quick=a popular JavaScript framework for building mobile apps;$todo=worth learning",
export const getQuickDefinitionFromExtras = (extras) => {
  const parts = extras.split("quick=");
  const rawDescription = parts[1];
  const pieces = rawDescription.split(";");
  const description = pieces[0];
  return description;
};
