
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Game for which to retrieve the moves.
   *  Format: `projects/{project}/locations/{location}/games/{game}`
   */
  // const name = 'abc123'
  /**
   *  The maximum number of moves to return. The service may return fewer than
   *  this value. If unspecified, at most 50 moves are returned. The maximum
   *  value is 1000; values above 1000 are coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListMoves` call. Provide this
   *  to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListMoves` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  The filter to apply to list results.
   */
  // const filter = 'abc123'
  /**
   *  Field to use to sort the list.
   */
  // const orderBy = 'abc123'

  // Imports the Aiplatform library
  const {GameServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new GameServiceClient();

  async function callListMoves() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const iterable = await aiplatformClient.listMovesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListMoves();


