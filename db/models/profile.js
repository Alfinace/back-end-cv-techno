
const {mongoose} = require('../db')
// USER MODEL
const profileSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required: true,
    },
    lastname:{
        type:String,
        trim:true,
        required: true,
    },
    firstname:{
        type:String,
        required: false,
    },
    photo:{
        type:String,
        required: false,
        default:null,
    },
    address: {
        type:String,
        required: true,
    },
    cin:{
        type:Number,
        required: true,
        unique:true,
    },
    profession: {
        type:Array,
        required: false,
    },
    contact: {
        type:String,
        required: true,
    },
    second_email: {
        type:String,
        required: false,
    },
    sexe:{
        type:String,
        enum: ['Men','woman']
    },
    naissance:{
        birthday:{
            type:Date,
            required: true,
        },
        birthplace:{
            type:String,
            required: true
        }
    },
    nationality: {
        type:String,
        required: true
    },
    situation: {
        type:String,
        enum: ['Single','Married','Widow','Engaged','Complicated','Separated','Divorced']
    },
    bio:{
        type:String,
        required: false,
        default: null,
    },
    createdAt: {
        type:Date,
        default: Date.now()
    },
    updatedAt: {
        type:Date,
        default: Date.now()
    }
})
const Profile = mongoose.model('Profile',profileSchema)

// EXPERIENCE MODEL
const experienceSchema = new mongoose.Schema({
    profileId: {
        type:mongoose.Types.ObjectId
    },
    domaine: {
        type:mongoose.Types.ObjectId,
        required:true
    },
    start: {
        type:Date,
        required: true
    },
    end:{
        type:Date,
        required: true
    },
    theme: {
        type:String,
        required: true
    },
    lieu:{
        type:String,
    },
    description: {
        type:String,
        required: false
    }
})
const Experience = mongoose.model('Experience',experienceSchema)

// LANGUAGE MODEL
const languageSchema = new mongoose.Schema({
    profileId: {
        type:mongoose.Types.ObjectId
    },
    label: {
        type:String,
        required: true
    },
    niveau: {
        type:String,
        enum:['begenner','advanced','master','exper']
    },
})
const Language = mongoose.model('Language',languageSchema)
// PARCOURS MODEL

const parcourSchema = new mongoose.Schema({
    profileId: {
        type:mongoose.Types.ObjectId
    },
    start: {
        type:Date,
        required: true
    },
    end: {
        type:Date,
        required: true
    },
    niveau:{
        type:String,
        required: true
    },
    lieu:{
        type:String,
        required: true
    },
    description: {
        type:String,
        required: false
    }
})
const Parcours = mongoose.model('Parcours',parcourSchema)
//  INFORMATIQUE MODEL
const informatiqueSchema = new mongoose.Schema({
    profileId: {
        type:mongoose.Types.ObjectId,
        required: true
    },
    domaine: {
        type:String,
        required:true
    },
    details:{
        type:Array,
        required: true
    }
})
const Informatique = mongoose.model('Informatique',informatiqueSchema)
// DOMAINE MODEL

const domaineSchema = new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:false
    }
})
const Domaine = mongoose.model('Domaine',domaineSchema)
// PASTIME MODEL

const pastimeSchema = new mongoose.Schema({
    profileId: {
        type:mongoose.Types.ObjectId
    },
    type:{
        type:String,
        required:true
    },
    details: {
        type:Array,
        required:true
    }
})
const Pastime = mongoose.model('Pastime',pastimeSchema)
module.exports = {
    Profile,
    Experience,
    Language,
    Parcours,
    Informatique,
    Domaine,
    Pastime
}