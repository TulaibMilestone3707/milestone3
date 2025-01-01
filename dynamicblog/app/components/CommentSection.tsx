import React, { useState } from 'react'
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button"

interface Comment {
  id: string;
  author: string;
  text: string;
}


interface CommentSectionPages {
  postId: string;
}











export default function CommentSection({ postId }: CommentSectionPages) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };
  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {

      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updateComments = comments.map((comments) =>
        comments.id === editingCommentId
          ? { ...comments, text: newComment, authore: authorName }
          : comments
      );
      setComments(updateComments);
      setNewComment('');
   setAuthorName('');
   setEditingCommentId(null);
   
    }

  };
return(
  <div className='mt-8'>
    <h2 className='text-2xl font-semibold'>Comments</h2>
    <div className='mt-4 space-y-4'>
      {comments.length >0? (
        comments.map((comment) =>(
          <Card key={comment.id}>
<CardContent className='p-4'>
<div className='font-semibold'> {comment.author}</div>
<p>{comment.text}</p>
<Button onClick={() => handleEditComment(comment.id)} 
className= 'mt-2 text-blue-500'
  > Edit</Button>
</CardContent>


          </Card>
        ))
      )
    :(
      <p className='text-slate-400'>NO Commet Yet</p>
    )}
    </div>
    <div className='mt-6'>
      <Input
      type="text"
      value={authorName}
      onChange={(e) => setAuthorName(e.target.value)}
placeholder='your name'
className='w-full mb-2'/>
    
    <Input
      type="text"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
placeholder='AA a comment'
className='w-full mb-2'/>
    
    <Button onClick={editingCommentId ? handleAddComment : handleAddComment}
    className='mt-4'>
      {editingCommentId ? 'save' : 'submit'}
    </Button>
    
    
    </div>






  </div>
);


}

























