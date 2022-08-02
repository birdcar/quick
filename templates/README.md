# {{ name }}

{{ description }}

## Inputs

{% if inputs.length %}
{% for input in action.inputs %}
- `{{ input.name }}`: {{ input.description }} 
{% endfor %}
{% else %}
@todo: Define inputs
{% endif %}

## Outputs

{% if outputs.length %}
{% for output in action.outputs %}
- `{{ output.name }}`: {{ output.description }} 
{% endfor %}
{% else %}
@todo: Define inputs
{% endif %}
