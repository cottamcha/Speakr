import { Component, For, Show } from "solid-js";
import MainLayout from "../components/layouts/Main";
import { CenteredDataLoader } from "../components/utils/DataLoader";
import { useAuthState } from "../context/auth";
import useUsers from "../hooks/useUsers";

const users = [
  {avatar: "https://thrangra.sirv.com/Avatar1.png", nickName: "Felipe"},
  {avatar: "https://thrangra.sirv.com/Avatar2.png", nickName: "Anna"},
]

const ProfileScreen: Component = () => {
  const {users, loading, followUser, loadingFollow} = useUsers()
  const authState = useAuthState()!;


  return (
    <MainLayout 
       onGlideAdded={() => {}} 
      pageTitle="Profile">
      <div class="flex-it py-1">
        <div class="pb-6 border-b border-gray-600">
          <div class="flex-it flex-row items-center px-4">
            <img
              class="rounded-full object-cover w-24 h-24 mr-4 cursor-pointer"
              src={authState.user?.avatar}
            ></img>
            <div class="mr-6">
              <div class="text-2xl font-bold">{authState.user?.fullName}</div>
              <div class="text-gray-400">@{authState.user?.nickName}</div>
            </div>
            <div class="mr-6">
              <div class="text-lg font-bold">Followers</div>
              <div class="text-gray-400">{authState.user?.followersCount}</div>
            </div>
            <div>
              <div class="text-lg font-bold">Following</div>
              <div class="text-gray-400">{authState.user?.followingCount}</div>
            </div>
          </div>
        </div>
        <Show 
        when={!loading()}
        fallback={
          <CenteredDataLoader />
        }
        >
        <Show 
          when={users().length > 0}
          fallback={
            <div class="flex-it">
              <div class="bg-yellow-500 mt-6 p-2 rounded-lg mx-4 [text-shadow:_2px_1.5px_0_rgb(0_0_0_/_40%)] text-center">
                Looks like you're the only user! Can i ask, what happened? Why are you the only user?
              </div>
            </div>
          }
        >
          <For each={users()}>
            {(user) => (
              <div class="flex-it p-4">
                <div class="flex-it flex-row">
                  <div class="flex-it mr-4">
                    <div class="w-14 h-14 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
                      <img class="rounded-full object-cover w-full h-full" src={user.avatar}></img>
                    </div>
                  </div>
                  <article class="flex-it flex-grow flex-shrink">
                    <div class="flex-it justify-center flex-grow mb-1">
                      <div class="flex-it justify-between flex-row w-full">
                        <div class="flex-it justify-center">
                          <span class="font-bold">{user.fullName}</span>
                          <span class="font-medium text-slate-400 text-sm">@{user.nickName}</span>
                        </div>
                        <div class="flex-it w-32 mt-3 cursor-pointer">
                          <button
                            disabled={loadingFollow()}
                            onClick={()=> followUser(user)}
                            type="button"
                            class="
                                disabled:cursor-not-allowed disabled:bg-gray-400
                                bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
                          >
                            <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                              <span>Follow</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            )}
          </For>
        </Show>
        </Show>
      </div>
    </MainLayout>
  );
};

export default ProfileScreen;