//Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
const chunk = (array, size = 1) => {
  let result = [];
  let temp_array = [];
  array.forEach((element, index) => {
    temp_array.push(element);
    if (!((index + 1) % size) || index == array.length - 1) {
      result.push(temp_array);
      temp_array = [];
    }
  });
  return result;
};

// Creates an array with all falsey values removed.The values false, null, 0, "", undefined, and NaN are falsey.
const compact = (array) => {
  //checks if element is in array
  const includes = (array, item) => {
    let result = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        result = true;
        break;
      }
    }
    return result;
  };

  let notCompact = [false, null, 0, "", undefined, NaN];
  return array.filter((element) => !includes(notCompact, element));
};

//Creates a new array concatenating array with any additional arrays and/or values.
const concat = (array, ...args) => {
  let result = array;
  args.forEach((element) => {
    result = Array.isArray(element)
      ? [...result, ...element]
      : [...result, element];
  });
  return result;
};

//Creates a slice of array with n elements dropped from the beginning.
const drop = (array, size = 1) => {
  size = Math.ceil(size);
  return array.filter((element, index) => index + 1 > size);
};

// Fills elements of array with value from start up to, but not including, end.
const fill = (array, replacement, start = 0, end) => {
  if (!end) {
    end = array.length;
  }
  return array.map((element, index) => {
    if (index >= start && index < end) {
      return replacement;
    } else {
      return element;
    }
  });
};

// Gets the first element of array.
const head = (array) => {
  if (!isArray(array)) return undefined;
  return array[0];
};

// Converts all elements in array into a string separated by separator.

const join = (array, seperator) => {
  return array.reduce((str, e, i) => {
    str += `${e}`;
    if (i + 1 != array.length) str += seperator;
    return str;
  }, "");
};

// Returs array  without  given values from input array
const pull = (array, pullArray) => {
  return array.reduce((result, e) => {
    if (!pullArray.includes(e)) result = [...result, e];
    return result;
  }, []);
};

// Returs  reversed array
const reverse = (array) => {
  return array.map((e, i) => {
    return array[array.length - i - 1];
  });
};

// Returns union of two arrays without duplicates
const union = (array1, array2) => {
  return [...array1, ...array2].reduce((result, e) => {
    if (!result.includes(e)) result = [...result, e];
    return result;
  }, []);
};

module.exports = {
  chunk,
  compact,
  concat,
  drop,
  fill,
  head,
  join,
  pull,
  reverse,
  union,
};
