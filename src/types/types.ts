const ItemExample = {
  "by" : "dhouston",
  "descendants" : 71,
  "id" : 8863,
  "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
  "score" : 111,
  "time" : 1175714200,
  "title" : "My YC app: Dropbox - Throw away your USB drive",
  "type" : "story",
  "url" : "http://www.getdropbox.com/u/2/screencast.html"
}

export type StoryType = typeof ItemExample

const CommentExample = {
  by: "BrandonM",
  id: 9224,
  kids: [9272],
  parent: 8863,
  text: "I have a few qualms with this app:<p>1. For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem.  From Windows or Mac, this FTP account could be accessed through built-in software.<p>2. It doesn't actually replace a USB drive.  Most people I know e-mail files to themselves or host them somewhere online to be able to perform presentations, but they still carry a USB drive in case there are connectivity problems.  This does not solve the connectivity issue.<p>3. It does not seem very \"viral\" or income-generating.  I know this is premature at this point, but without charging users for the service, is it reasonable to expect to make money off of this?",
  time: 1175786214,
  type: "comment",
}

export type CommentType = typeof CommentExample