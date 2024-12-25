export const safeStringify = (
  obj: unknown,
  space?: string | number,
): string => {
  const seen = new WeakMap<object, string>()

  function traverseAndClean(
    key: string,
    value: unknown,
    parentPath: string = 'root',
  ): unknown {
    // Handle primitives and functions
    if (value === null || typeof value !== 'object') {
      return value
    }

    // Detect circular reference
    if (seen.has(value)) {
      return `[Circular reference at ${seen.get(value)}]` // Placeholder for circular reference
    }

    // Mark this object as seen with its current path
    seen.set(value, `${parentPath}${key ? `.${key}` : ''}`)

    // Recursively clean all object properties
    if (Array.isArray(value)) {
      return value.map((item, index) =>
        traverseAndClean(
          `${index}`,
          item,
          `${parentPath}${key ? `.${key}` : ''}`,
        ),
      )
    } else {
      const cleanedObj: Record<string, unknown> = {}
      for (const prop in value) {
        if (Object.prototype.hasOwnProperty.call(value, prop)) {
          cleanedObj[prop] = traverseAndClean(
            prop,
            (value as Record<string, unknown>)[prop],
            `${parentPath}${key ? `.${key}` : ''}`,
          )
        }
      }
      return cleanedObj
    }
  }

  return JSON.stringify(
    traverseAndClean('', obj),
    (key, value) => {
      if (typeof value === 'function') {
        return '[Function]'
      }
      return value
    },
    space,
  )
}
