-- -----------------------------------------------------
-- Table `electro8DB`.`categories`
-- -----------------------------------------------------

insert into categories (id, name, created_at, updated_at, deleted_at) values (1, 'dualciclos', '2020-11-22 18:18:07', '2019-12-24 06:41:21', '2020-01-02 08:17:49');
insert into categories (id, name, created_at, updated_at, deleted_at) values (2, 'monopatines', '2020-04-21 11:27:20', '2020-04-14 18:56:49', '2020-09-15 20:30:34');
insert into categories (id, name, created_at, updated_at, deleted_at) values (3, 'monociclos', '2020-01-09 23:30:49', '2019-12-21 00:17:02', '2020-01-09 20:56:18');
insert into categories (id, name, created_at, updated_at, deleted_at) values (4, 'bicicletas', '2020-09-24 07:52:35', '2020-05-24 19:31:16', '2020-02-08 05:41:10');
insert into categories (id, name, created_at, updated_at, deleted_at) values (5, 'accesorios', '2020-09-24 07:52:35', '2020-05-24 19:31:16', '2020-02-08 05:41:10');

-- -----------------------------------------------------
-- Table `electro8DB`.`warranties`
-- -----------------------------------------------------

insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (1, 3, 'Chile', 1, '2020-08-09 10:41:40', '2020-09-29 12:27:53', '2020-03-02 13:18:53');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (2, 3, 'Sweden', 1, '2020-01-27 02:11:45', '2020-02-18 16:03:15', '2020-04-08 08:36:12');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (3, 1, 'Canada', 0, '2020-10-09 11:23:13', '2020-01-01 06:25:40', '2020-10-12 12:38:38');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (4, 2, 'Brazil', 0, '2020-10-25 06:18:23', '2020-10-08 16:56:53', '2020-04-30 01:48:37');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (5, 2, 'Philippines', 1, '2020-05-06 22:41:13', '2020-10-11 01:13:50', '2020-03-26 00:19:49');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (6, 2, 'Indonesia', 1, '2020-01-09 11:32:00', '2020-09-24 00:40:52', '2020-09-28 02:04:40');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (7, 1, 'Jamaica', 0, '2020-11-14 15:09:42', '2020-12-04 04:48:17', '2020-04-02 13:43:25');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (8, 1, 'Greece', 0, '2020-08-30 05:08:29', '2020-02-26 02:26:52', '2020-09-27 07:08:14');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (9, 1, 'Argentina', 0, '2020-05-15 06:41:15', '2020-12-12 12:32:01', '2020-05-14 02:24:27');
insert into warranties (id, duration, country_origin, oficial_coverage, created_at, updated_at, deleted_at) values (10, 1, 'Russia', 1, '2020-07-06 23:34:56', '2020-09-28 18:17:49', '2020-09-19 13:41:30');

-- -----------------------------------------------------
-- Table `electro8DB`.`user_cart`
-- -----------------------------------------------------

insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (1, 78, 10191.44, '2020-03-30 19:38:47', '2020-11-18 02:27:42', '2020-02-11 21:04:38');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (2, 43, 89342.77, '2020-03-22 17:24:30', '2020-11-29 05:25:22', '2020-05-22 22:27:25');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (3, 68, 58006.83, '2020-06-04 19:09:44', '2020-06-17 22:52:01', '2020-05-23 05:48:40');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (4, 61, 4182.6, '2020-09-01 19:31:25', '2020-07-08 02:13:04', '2020-06-01 18:27:37');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (5, 85, 15687.97, '2020-08-16 12:38:01', '2020-03-19 21:21:29', '2020-06-29 16:31:34');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (6, 45, 46821.62, '2020-05-06 02:50:10', '2020-02-02 04:23:04', '2020-03-28 06:10:10');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (7, 32, 85462.48, '2020-02-06 15:55:32', '2020-08-29 01:35:36', '2020-07-02 09:02:38');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (8, 13, 4800.53, '2020-11-18 20:17:17', '2020-05-14 21:37:20', '2020-12-09 16:09:22');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (9, 74, 19705.45, '2020-09-30 23:00:57', '2020-10-08 06:38:26', '2020-02-18 06:26:22');
insert into user_cart (id, quantity, unit_price, created_at, updated_at, deleted_at) values (10, 77, 77560.93, '2020-07-29 20:28:44', '2020-11-28 23:13:35', '2020-03-17 01:57:16');

-- -----------------------------------------------------
-- Table `electro8DB`.`products`
-- -----------------------------------------------------

insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (1, 'Lexus', 73354.86, 'Detachment at Left 5th Toe, Mid, Open Approach', 22.37, 97, 1, 0, 1, 0, 0, 'Electronic', 'Puce', 14, '2020-10-24 05:01:55', '2020-05-14 11:46:27', '2020-11-27 17:43:44', 3, 6);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (2, 'Plymouth', 73667.22, 'Supplement Left Upper Arm with Synthetic Substitute, Percutaneous Endoscopic Approach', 2.36, 89, 1, 1, 1, 0, 0, 'Electronic', 'Puce', 75, '2020-11-09 15:50:12', '2020-06-16 04:36:47', '2020-03-13 09:17:06', 1, 6);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (3, 'Mercury', 10153.81, 'Supplement Right Lower Leg Tendon with Synthetic Substitute, Open Approach', 69.74, 81, 1, 1, 1, 1, 0, 'Mecanic', 'Purple', 36, '2019-12-28 21:22:44', '2019-12-27 16:13:10', '2019-12-22 05:26:23', 2, 2);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (4, 'Ford', 94606.11, 'Removal of Nonautologous Tissue Substitute from Facial Bone, Open Approach', 57.04, 42, 1, 0, 1, 1, 1, 'Electronic', 'Goldenrod', 14, '2019-12-24 06:18:26', '2020-01-03 18:19:08', '2020-11-17 07:42:12', 4, 9);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (5, 'Volvo', 67980.53, 'Dilation of Right Ureter with Intraluminal Device, Percutaneous Approach', 55.22, 28, 1, 1, 1, 1, 0, 'Electronic', 'Pink', 65, '2020-09-19 06:57:28', '2020-08-18 18:10:01', '2020-02-25 05:01:29', 3, 9);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (6, 'Volkswagen', 12801.23, 'Change Pressure Dressing on Left Lower Leg', 22.49, 13, 0, 1, 0, 1, 0, 'Electronic', 'Red', 19, '2020-05-24 20:52:37', '2020-08-19 18:51:11', '2020-07-23 09:59:14', 1, 6);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (7, 'Saab', 58496.25, 'Fluoroscopy of Hepatic Artery using High Osmolar Contrast', 5.99, 79, 1, 1, 1, 0, 1, 'Mecanic', 'Green', 89, '2020-07-02 05:23:28', '2020-02-29 09:51:40', '2020-03-17 20:54:30', 1, 4);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (8, 'Jaguar', 47331.07, 'Supplement Left Toe Phalangeal Joint with Nonautologous Tissue Substitute, Open Approach', 6.63, 85, 0, 0, 0, 0, 1, 'Electronic', 'Red', 89, '2020-06-27 16:14:15', '2020-04-16 16:47:50', '2020-02-01 05:00:01', 4, 7);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (9, 'Isuzu', 64025.03, 'Revision of Spacer in Right Metacarpocarpal Joint, External Approach', 54.94, 17, 0, 0, 1, 1, 0, 'Electronic', 'Purple', 98, '2020-10-27 17:31:14', '2020-07-29 14:37:21', '2020-05-29 10:54:45', 1, 7);
insert into products (id, name, price, description, discount, stock, speed, battery, wheel, light, folding, brake, color, weight, created_at, updated_at, deleted_at, categories_id, warranties_id) values (10, 'Titus', 67440.49, 'Division of Tibial Nerve, Percutaneous Endoscopic Approach', 57.79, 98, 0, 1, 0, 1, 0, 'Mecanic', 'Mauv', 60, '2020-02-04 20:50:11', '2020-12-11 10:39:18', '2020-10-03 14:38:15', 4, 5);

-- -----------------------------------------------------
-- Table `electro8DB`.`carts`
-- -----------------------------------------------------

insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (1, 265883.86, '2020-02-08 20:13:28', '2020-05-18 10:19:45', '2020-10-10 16:59:26', 1, 1);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (2, 480320.0, '2020-07-06 08:41:04', '2020-07-31 18:32:58', '2020-10-18 12:14:32', 2, 2);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (3, 878182.2, '2020-01-14 22:24:35', '2020-06-10 01:53:38', '2020-10-16 08:54:37', 3, 3);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (4, 613623.57, '2020-01-29 08:59:32', '2020-02-18 19:50:15', '2020-07-01 01:54:18', 4, 4);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (5, 637391.79, '2020-10-01 09:32:04', '2020-05-19 16:00:19', '2020-10-24 18:01:48', 5, 5);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (6, 407393.68, '2020-08-25 06:18:08', '2020-12-20 20:32:43', '2020-07-16 20:07:39', 6, 6);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (7, 625703.0, '2020-07-19 09:11:45', '2020-02-17 03:29:30', '2020-01-25 06:46:35', 7, 7);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (8, 727540.51, '2020-08-07 07:23:57', '2020-02-09 16:43:16', '2020-12-11 03:21:51', 8, 8);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (9, 25934.46, '2020-05-07 03:55:38', '2020-08-03 03:46:12', '2020-06-02 15:02:03', 9, 9);
insert into carts (id, total_price, created_at, updated_at, deleted_at, products_id, user_cart_id) values (10, 142923.42, '2020-03-03 00:24:36', '2020-08-05 21:12:35', '2020-03-16 07:33:17', 10, 10);

-- -----------------------------------------------------
-- Table `electro8DB`.`users`
-- -----------------------------------------------------

insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (1, 'dpembry0', 'dpembry0@walmart.com', 'Gn2MiqgU', 'Dulcinea', 'Pembry', '38259 East Plaza', 'standard', '2020-03-17 02:51:37', '2020-10-11 17:47:04', '2020-06-06 08:42:11', 1);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (2, 'apestell1', 'apestell1@booking.com', '1PHqYB6J2S4', 'Anne', 'Pestell', '6973 Gateway Parkway', 'standard', '2020-11-01 17:35:20', '2020-04-10 00:34:12', '2020-01-29 07:23:44', 2);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (3, 'grosenqvist2', 'grosenqvist2@eventbrite.com', 'AYSeNZ', 'Georgianna', 'Rosenqvist', '8 Amoth Hill', 'standard', '2020-10-11 10:58:17', '2020-06-08 12:53:08', '2020-08-16 13:11:11', 3);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (4, 'moflaverty3', 'moflaverty3@vkontakte.ru', 'OTIZQp9tJZ', 'May', 'O''Flaverty', '45494 Vernon Park', 'standard', '2020-01-28 06:46:52', '2020-08-01 13:56:35', '2019-12-24 03:12:42', 4);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (5, 'ahaysman4', 'ahaysman4@ted.com', 'DTonwww67X', 'Alejoa', 'Haysman', '33 Sutherland Avenue', 'standard', '2019-12-23 05:45:10', '2020-03-19 18:38:03', '2020-05-13 14:37:23',5);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (6, 'pcroley5', 'pcroley5@vinaora.com', '4wCmfmtxhtV', 'Pyotr', 'Croley', '63384 Shasta Junction', 'standard', '2020-10-09 08:25:48', '2020-10-23 05:35:09', '2020-08-14 11:32:00', 6);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (7, 'ntharme6', 'ntharme6@godaddy.com', 'JnQalRm1RajQ', 'Nilson', 'Tharme', '179 Vidon Plaza', 'standard', '2020-07-10 06:18:09', '2020-04-30 11:09:25', '2020-03-05 15:54:10', 7);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (8, 'cbarden7', 'cbarden7@hatena.ne.jp', 'SvJubDS', 'Catina', 'Barden', '68381 Manitowish Road', 'standard', '2020-09-18 16:09:46', '2020-05-23 11:38:53', '2020-04-25 17:15:04', 8);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (9, 'smacfadden8', 'smacfadden8@aboutads.info', 'KAY4DN4m', 'Steven', 'MacFadden', '0813 Mayfield Road', 'standard', '2020-09-19 23:52:33', '2020-03-07 10:26:20', '2020-12-10 16:20:23', 9);
insert into users (id, username, email, password, first_name, last_name, address, profile, created_at, updated_at, deleted_at, carts_id) values (10, 'rfewster9', 'rfewster9@indiegogo.com', 'CgjwTF', 'Rozamond', 'Fewster', '369 Troy Center', 'standard', '2020-02-07 14:28:17', '2020-03-28 20:39:26', '2020-08-06 13:05:22', 10);
