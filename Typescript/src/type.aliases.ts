//you can create aliases for types e.g
// note the type keyword. also start the type aliase with capital letter

type St = string;
type StringArray = string[]; //NB string[] means array of strings.
type MaybeStringArray= null | StringArray //using union and type aliase

//so anywhere i want to use string datatype i can specify St instead. make your alias descriptive though.

const lastname: St = 'sam';
const names: StringArray = ['sam', 'joe']