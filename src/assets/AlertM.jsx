import React from 'react'
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';



const AlertM = () => {
    return (
        <div>


            <Group position="center">
                <Button
                    variant="outline"
                    onClick={() =>
                        notifications.show({
                            title: 'Default notification',
                            message: 'Hey there, your code is awesome! 🤥',
                        })
                    }
                >
                    Show notification
                </Button>
            </Group>

        </div>
    )
}

export default AlertM
