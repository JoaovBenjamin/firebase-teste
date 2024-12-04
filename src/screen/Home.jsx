import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreatePostScreen from '../actions/create'
import PostList from '../actions/get'

const Home = () => {
  return (
    <View>
        <PostList/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})