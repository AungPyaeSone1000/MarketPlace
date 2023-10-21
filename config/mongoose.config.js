const mongoose = require('mongoose');

mongoose.connect('<your-connection-string>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
