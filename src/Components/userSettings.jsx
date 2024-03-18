
import React, { Component } from 'react'
import {
    Toolbar, Group, Switch, Checkbox, CheckboxGroup,
    Radio, RadioGroup, Option, Selection, Input, TextArea
} from 'user-settings'
class Settings extends Component {
    handleSubmit = (data) => console.log
    render() {
        return(
            <userSettings color={'#fffa'} onSubmit={this.handleSubmit}>
                <Toolbar />
                <Group>
                  <Switch name='mySwitch' title='Switch One'/>
                  <Input name='myTextField' title='InputField'/>
                  <TextArea name='myTextArea' title='Text Area One'/>
                  <CheckboxGroup name='myCheckbox' title='Checkbox One'>
                    <Checkbox value='HELP' />
                    <Checkbox value='PRIVACY' />
                    <Checkbox value='ACCOUNT SETTINGS' />
                  </CheckboxGroup>
                </Group>
                <Group>
                    <Selection title="Selection" name='mySelection' >
                        <Option value='a' />
                        <Option value='b' />
                        <Option value='c' />
                    </Selection>
                    
                    <RadioGroup title="Radio Group" name='myRadio'>
                        <Radio value='SMS' />
                        <Radio value='CHAT' />
                        <Radio value='EMAIL' />
                    </RadioGroup>
                </Group>
            </userSettings>
        )
    }
}
