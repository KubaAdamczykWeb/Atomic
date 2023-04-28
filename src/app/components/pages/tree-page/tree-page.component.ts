import { Component } from '@angular/core';
import { PageContent, Template } from '../contentModel';
import { OrganismTypes } from '../../organisms/organismModel';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.scss']
})
export class TreePageComponent {
  content: PageContent = {
    template: Template.oneColumn,
    title: {
      text: "Tree"
    },
    columnA: {
      mutables: [
        {
          type: OrganismTypes.Tree,
          data: {
            items: [
              {
                mutable: {
                  type: OrganismTypes.Label,
                  data: {
                    label: "one"
                  }
                }
              },
              {
                mutable: {
                  type: OrganismTypes.Label,
                  data: {
                    label: "two"
                  }
                }
              },
              {
                mutable: {
                  type: OrganismTypes.Label,
                  data: {
                    label: "three"
                  }
                },
                tree: {
                  items: [
                    {
                      mutable: {
                        type: OrganismTypes.Label,
                        data: {
                          label: "one"
                        }
                      }
                    },
                    {
                      mutable: {
                        type: OrganismTypes.Label,
                        data: {
                          label: "two"
                        }
                      }
                    },
                    {
                      mutable: {
                        type: OrganismTypes.Label,
                        data: {
                          label: "three"
                        }
                      },
                      tree: {
                        items: [
                          {
                            mutable: {
                              type: OrganismTypes.Label,
                              data: {
                                label: "one"
                              }
                            }
                          },
                          {
                            mutable: {
                              type: OrganismTypes.Footer,
                              data: {
                                text: "Stopka w drzewie"
                              }
                            }
                          },
                          {
                            mutable: {
                              type: OrganismTypes.Label,
                              data: {
                                label: "three"
                              }
                            }
                          },
                          {
                            mutable: {
                              type: OrganismTypes.Label,
                              data: {
                                label: "four"
                              }
                            }
                          },
                        ]
                      }
                    },
                    {
                      mutable: {
                        type: OrganismTypes.Label,
                        data: {
                          label: "four"
                        }
                      }
                    },
                    {
                      mutable: {
                        type: OrganismTypes.Label,
                        data: {
                          label: "five"
                        }
                      }
                    },
                  ]
                }
              },
              {
                mutable: {
                  type: OrganismTypes.Label,
                  data: {
                    label: "four",
                  }
                },
                tree: {
                  items: [
                    {
                      mutable: {
                        type: OrganismTypes.LabelWithIcon,
                        data: {
                          label: "one"
                        }
                      }
                    },
                    {
                      mutable: {
                        type: OrganismTypes.LabelWithIcon,
                        data: {
                          label: "three"
                        }
                      }
                    },
                    {
                      mutable: {
                        type: OrganismTypes.LabelWithIcon,
                        data: {
                          label: "four"
                        }
                      }
                    },
                  ]
                }
              },
              {
                mutable: {
                  type: OrganismTypes.Label,
                  data: {
                    label: "five"
                  }
                }
              },
            ]
          }
        },
      ]
    }
  };
}
