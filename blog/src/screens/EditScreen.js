import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        // "navigation.pop()" returns the user to the previous view (screen) they were looking at, or the previous view before this one (EditScreen)
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

// "defaultProps" is an automatic system that you can use to
// give your component some default props.

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};
const styles = StyleSheet.create({});

export default EditScreen;
