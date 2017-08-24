'use strict';

var btc = module.exports;

// module information
btc.version = 'v' + require('./package.json').version;

// crypto
btc.crypto = {};
btc.crypto.BN = require('./lib/crypto/bn');
btc.crypto.ECDSA = require('./lib/crypto/ecdsa');
btc.crypto.Hash = require('./lib/crypto/hash');
btc.crypto.Random = require('./lib/crypto/random');
btc.crypto.Point = require('./lib/crypto/point');
btc.crypto.Signature = require('./lib/crypto/signature');

// encoding
btc.encoding = {};
btc.encoding.Base58 = require('./lib/encoding/base58');
btc.encoding.Base58Check = require('./lib/encoding/base58check');
btc.encoding.BufferReader = require('./lib/encoding/bufferreader');
btc.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
btc.encoding.Varint = require('./lib/encoding/varint');

// utilities
btc.util = {};
btc.util.buffer = require('./lib/util/buffer');
btc.util.js = require('./lib/util/js');
btc.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
btc.errors = require('./lib/errors');

// main bitcoin library
btc.Address = require('./lib/address');
btc.Block = require('./lib/block');
btc.MerkleBlock = require('./lib/block/merkleblock');
btc.BlockHeader = require('./lib/block/blockheader');
btc.HDPrivateKey = require('./lib/hdprivatekey.js');
btc.HDPublicKey = require('./lib/hdpublickey.js');
btc.Networks = require('./lib/networks');
btc.Opcode = require('./lib/opcode');
btc.PrivateKey = require('./lib/privatekey');
btc.PublicKey = require('./lib/publickey');
btc.Script = require('./lib/script');
btc.Transaction = require('./lib/transaction');
btc.URI = require('./lib/uri');
btc.Unit = require('./lib/unit');

// dependencies, subject to change
btc.deps = {};
btc.deps.bnjs = require('bn.js');
btc.deps.bs58 = require('bs58');
btc.deps.Buffer = Buffer;
btc.deps.elliptic = require('elliptic');
btc.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
btc._HDKeyCache = require('./lib/hdkeycache');
btc.Transaction.sighash = require('./lib/transaction/sighash');
