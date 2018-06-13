# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180612064639) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "garments", force: :cascade do |t|
    t.bigint "user_id"
    t.string "title"
    t.string "brand"
    t.string "image_url"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "needs_measurements"
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["user_id"], name: "index_garments_on_user_id"
  end

  create_table "measurements", force: :cascade do |t|
    t.bigint "garment_id"
    t.float "hips"
    t.float "outseam"
    t.float "thigh"
    t.float "knee"
    t.float "calf"
    t.float "ankle"
    t.float "inseam"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "conversion_rate"
    t.index ["garment_id"], name: "index_measurements_on_garment_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "garments", "users"
  add_foreign_key "measurements", "garments"
end
