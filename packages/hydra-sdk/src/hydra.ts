export type Hydra = {
  "version": "0.3.0",
  "name": "hydra",
  "instructions": [
    {
      "name": "processInit",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "InitializeFanoutArgs"
                },
                "path": "args.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-native-account"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitializeFanoutArgs"
          }
        },
        {
          "name": "model",
          "type": {
            "defined": "MembershipModel"
          }
        }
      ]
    },
    {
      "name": "processInitForMint",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mintHoldingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpSeed",
          "type": "u8"
        }
      ]
    },
    {
      "name": "processAddMemberWallet",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "processAddMemberNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "processSetTokenMemberStake",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processSetForTokenMemberStake",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processDistributeNft",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "membership_key"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processDistributeWallet",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processDistributeToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processSignMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "holdingAccount",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-native-account"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              }
            ]
          }
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "processTransferShares",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fromMember",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "toMember",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "fromMembershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "from_member"
              }
            ]
          },
          "relations": [
            "fanout"
          ]
        },
        {
          "name": "toMembershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "to_member"
              }
            ]
          },
          "relations": [
            "fanout"
          ]
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processUnstake",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "processRemoveMember",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "fanout",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "accountKey",
            "type": "publicKey"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "totalMembers",
            "type": "u64"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "accountOwnerBumpSeed",
            "type": "u8"
          },
          {
            "name": "totalAvailableShares",
            "type": "u64"
          },
          {
            "name": "membershipModel",
            "type": {
              "defined": "MembershipModel"
            }
          },
          {
            "name": "membershipMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalStakedShares",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "fanoutMint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fanoutMembershipVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "membershipKey",
            "type": "publicKey"
          },
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fanoutMembershipMintVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "fanoutMint",
            "type": "publicKey"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AddMemberArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitializeFanoutArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "nativeAccountBumpSeed",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalShares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MembershipModel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Wallet"
          },
          {
            "name": "Token"
          },
          {
            "name": "NFT"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "BadArtithmetic",
      "msg": "Encountered an arithmetic error"
    },
    {
      "code": 6001,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6002,
      "name": "InsufficientShares",
      "msg": "Not Enough Available Shares"
    },
    {
      "code": 6003,
      "name": "SharesArentAtMax",
      "msg": "All available shares must be assigned to a member"
    },
    {
      "code": 6004,
      "name": "NewMintAccountRequired",
      "msg": "A New mint account must be provided"
    },
    {
      "code": 6005,
      "name": "MintAccountRequired",
      "msg": "A Token type Fanout requires a Membership Mint"
    },
    {
      "code": 6006,
      "name": "InvalidMembershipModel",
      "msg": "Invalid Membership Model"
    },
    {
      "code": 6007,
      "name": "InvalidMembershipVoucher",
      "msg": "Invalid Membership Voucher"
    },
    {
      "code": 6008,
      "name": "MintDoesNotMatch",
      "msg": "Invalid Mint for the config"
    },
    {
      "code": 6009,
      "name": "InvalidHoldingAccount",
      "msg": "Holding account does not match the config"
    },
    {
      "code": 6010,
      "name": "HoldingAccountMustBeAnATA",
      "msg": "A Mint holding account must be an ata for the mint owned by the config"
    },
    {
      "code": 6011,
      "name": "DerivedKeyInvalid"
    },
    {
      "code": 6012,
      "name": "IncorrectOwner"
    },
    {
      "code": 6013,
      "name": "WalletDoesNotOwnMembershipToken",
      "msg": "Wallet Does not Own Membership Token"
    },
    {
      "code": 6014,
      "name": "InvalidMetadata",
      "msg": "The Metadata specified is not valid Token Metadata"
    },
    {
      "code": 6015,
      "name": "NumericalOverflow"
    },
    {
      "code": 6016,
      "name": "InsufficientBalanceToDistribute",
      "msg": "Not enough new balance to distribute"
    },
    {
      "code": 6017,
      "name": "InvalidFanoutForMint"
    },
    {
      "code": 6018,
      "name": "MustDistribute",
      "msg": "This operation must be the instruction right after a distrobution on the same accounts."
    },
    {
      "code": 6019,
      "name": "InvalidStakeAta"
    },
    {
      "code": 6020,
      "name": "CannotTransferToSelf"
    },
    {
      "code": 6021,
      "name": "TransferNotSupported",
      "msg": "Transfer is not supported on this membership model"
    },
    {
      "code": 6022,
      "name": "RemoveNotSupported",
      "msg": "Remove is not supported on this membership model"
    },
    {
      "code": 6023,
      "name": "RemoveSharesMustBeZero",
      "msg": "Before you remove a wallet or NFT member please transfer the shares to another member"
    },
    {
      "code": 6024,
      "name": "InvalidCloseAccountDestination",
      "msg": "Sending Sol to a SPL token destination will render the sol unusable"
    }
  ]
};

export const IDL: Hydra = {
  "version": "0.3.0",
  "name": "hydra",
  "instructions": [
    {
      "name": "processInit",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "InitializeFanoutArgs"
                },
                "path": "args.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-native-account"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitializeFanoutArgs"
          }
        },
        {
          "name": "model",
          "type": {
            "defined": "MembershipModel"
          }
        }
      ]
    },
    {
      "name": "processInitForMint",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mintHoldingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpSeed",
          "type": "u8"
        }
      ]
    },
    {
      "name": "processAddMemberWallet",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "processAddMemberNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "processSetTokenMemberStake",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processSetForTokenMemberStake",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processDistributeNft",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "membership_key"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processDistributeWallet",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processDistributeToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processSignMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "holdingAccount",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-native-account"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              }
            ]
          }
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "processTransferShares",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fromMember",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "toMember",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "fromMembershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "from_member"
              }
            ]
          },
          "relations": [
            "fanout"
          ]
        },
        {
          "name": "toMembershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "to_member"
              }
            ]
          },
          "relations": [
            "fanout"
          ]
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processUnstake",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "processRemoveMember",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "fanout",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "accountKey",
            "type": "publicKey"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "totalMembers",
            "type": "u64"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "accountOwnerBumpSeed",
            "type": "u8"
          },
          {
            "name": "totalAvailableShares",
            "type": "u64"
          },
          {
            "name": "membershipModel",
            "type": {
              "defined": "MembershipModel"
            }
          },
          {
            "name": "membershipMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalStakedShares",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "fanoutMint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fanoutMembershipVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "membershipKey",
            "type": "publicKey"
          },
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fanoutMembershipMintVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "fanoutMint",
            "type": "publicKey"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AddMemberArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitializeFanoutArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "nativeAccountBumpSeed",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalShares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MembershipModel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Wallet"
          },
          {
            "name": "Token"
          },
          {
            "name": "NFT"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "BadArtithmetic",
      "msg": "Encountered an arithmetic error"
    },
    {
      "code": 6001,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6002,
      "name": "InsufficientShares",
      "msg": "Not Enough Available Shares"
    },
    {
      "code": 6003,
      "name": "SharesArentAtMax",
      "msg": "All available shares must be assigned to a member"
    },
    {
      "code": 6004,
      "name": "NewMintAccountRequired",
      "msg": "A New mint account must be provided"
    },
    {
      "code": 6005,
      "name": "MintAccountRequired",
      "msg": "A Token type Fanout requires a Membership Mint"
    },
    {
      "code": 6006,
      "name": "InvalidMembershipModel",
      "msg": "Invalid Membership Model"
    },
    {
      "code": 6007,
      "name": "InvalidMembershipVoucher",
      "msg": "Invalid Membership Voucher"
    },
    {
      "code": 6008,
      "name": "MintDoesNotMatch",
      "msg": "Invalid Mint for the config"
    },
    {
      "code": 6009,
      "name": "InvalidHoldingAccount",
      "msg": "Holding account does not match the config"
    },
    {
      "code": 6010,
      "name": "HoldingAccountMustBeAnATA",
      "msg": "A Mint holding account must be an ata for the mint owned by the config"
    },
    {
      "code": 6011,
      "name": "DerivedKeyInvalid"
    },
    {
      "code": 6012,
      "name": "IncorrectOwner"
    },
    {
      "code": 6013,
      "name": "WalletDoesNotOwnMembershipToken",
      "msg": "Wallet Does not Own Membership Token"
    },
    {
      "code": 6014,
      "name": "InvalidMetadata",
      "msg": "The Metadata specified is not valid Token Metadata"
    },
    {
      "code": 6015,
      "name": "NumericalOverflow"
    },
    {
      "code": 6016,
      "name": "InsufficientBalanceToDistribute",
      "msg": "Not enough new balance to distribute"
    },
    {
      "code": 6017,
      "name": "InvalidFanoutForMint"
    },
    {
      "code": 6018,
      "name": "MustDistribute",
      "msg": "This operation must be the instruction right after a distrobution on the same accounts."
    },
    {
      "code": 6019,
      "name": "InvalidStakeAta"
    },
    {
      "code": 6020,
      "name": "CannotTransferToSelf"
    },
    {
      "code": 6021,
      "name": "TransferNotSupported",
      "msg": "Transfer is not supported on this membership model"
    },
    {
      "code": 6022,
      "name": "RemoveNotSupported",
      "msg": "Remove is not supported on this membership model"
    },
    {
      "code": 6023,
      "name": "RemoveSharesMustBeZero",
      "msg": "Before you remove a wallet or NFT member please transfer the shares to another member"
    },
    {
      "code": 6024,
      "name": "InvalidCloseAccountDestination",
      "msg": "Sending Sol to a SPL token destination will render the sol unusable"
    }
  ]
};
