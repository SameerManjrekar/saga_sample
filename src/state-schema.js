export const applicationStateSchema = {
    'sameer': {
        'additionalProperties': true,
        'type': 'object',
        'properties': {
            'test': {
                'type': 'object',
                'additionalProperties': false,
                'properties': {
                    'testGrid': {
                        'type': 'array',
                        'additionalProperties': false
                    }
                },
                "required": ["testGrid"],
            },
        },
    }
};