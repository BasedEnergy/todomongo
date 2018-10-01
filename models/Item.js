var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ItemSchema object
// This is similar to a Sequelize model
var ItemSchema = new Schema({
    // `label` must be of type String
    label: String,
    // check` must be of type Boolean
    checked: boolean
});

// This creates our model from the above schema, using mongoose's model method
var Item = mongoose.model("Item", ItemSchema);

// Export the Item model
module.exports = Item;