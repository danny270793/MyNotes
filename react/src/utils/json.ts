export const safeStringify = (obj: any, space?: string | number): string => {
    const seen = new WeakMap<any, string>();

  function traverseAndClean(key: string, value: any, parentPath: string = 'root'): any {
    // Handle primitives and functions
    if (value === null || typeof value !== 'object') {
      return value;
    }

    // Detect circular reference
    if (seen.has(value)) {
      return `[Circular reference at ${seen.get(value)}]`; // Placeholder for circular reference
    }

    // Mark this object as seen with its current path
    seen.set(value, `${parentPath}${key ? `.${key}` : ''}`);

    // Recursively clean all object properties
    if (Array.isArray(value)) {
      return value.map((item, index) => traverseAndClean(`${index}`, item, `${parentPath}${key ? `.${key}` : ''}`));
    } else {
      const cleanedObj: any = {};
      for (const prop in value) {
        if (value.hasOwnProperty(prop)) {
          cleanedObj[prop] = traverseAndClean(prop, value[prop], `${parentPath}${key ? `.${key}` : ''}`);
        }
      }
      return cleanedObj;
    }
  }

  return JSON.stringify(traverseAndClean('', obj),  (key, value) => {
    if (typeof value === 'function') {
      return '[Function]';
    }
    return value;
  }, space);
}
