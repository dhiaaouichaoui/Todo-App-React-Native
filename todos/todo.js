import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
export default class Todos extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            todos:[],
            text:""
        }
    } 
    //Add some text to the todo list
    addTodo() {
        if (this.state.text) {
            var date = new Date();

            this.state.noteArray.push({
               'date' : date.getFullYear()+
               '/' +(date.getMonth() + 1)+
               '/' + date.getDate(),
               'text':this.state.text
            });

          
            this.setState({todos: this.state.todos});
            this.setState({text:this.state.text});
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>ToDo</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder='Task'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3933FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#3933FF',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});