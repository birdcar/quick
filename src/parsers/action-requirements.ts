import slugify from 'slugify'

import {ActionRequirement} from '../interfaces'

export function parseRequirements(requirements: string[]): ActionRequirement[] {
  return requirements.map(r => {
    const [name, description, required, valDefault] = r.split(':')
    return {
      name: slugify(name),
      description,
      required: Boolean(required),
      default: valDefault ? valDefault : null,
    }
  })
}
