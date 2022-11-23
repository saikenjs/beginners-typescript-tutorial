interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

/**
 * Because we have async task inside function, so function return type will be a Promise<T>
 *
 * We can remove function return type annotation, and annotate data with type `LukeSkywalker`.
 * Now, Typescript with auto inference return type of fetchLukeSkywalker is Promise<LukeSkywalker>
 *
 * I prefer the first way, because I will know exactly and force return type of function.
 */
